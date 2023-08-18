import { ALL_ICONS } from "@utils/icon";
import { useRouter } from "next/router";
import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from "react";

import ActiveLink from "../active-link";
import Heading from "../heading";
import { debounce } from "@utils/debounce";
const searchPath = "/search";

function isAppleDevice() {
  if (
    typeof navigator === undefined ||
    typeof navigator.userAgent === undefined
  ) {
    return;
  }
  return /(iPod|iPad|iPhone|Mac)/i.test(navigator.userAgent);
}

export default function Sidebar() {
  const iconsList = useMemo(
    () => ALL_ICONS.sort((a, b) => (a.name > b.name ? 1 : -1)),
    []
  );
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState("");
  const [deviceType, setDeviceType] = useState("unknown");
  const inputRef = useRef<HTMLInputElement>();

  // search input stays synced with URL
  useEffect(() => {
    const { q } = router.query as { q: string | string[] | undefined };
    setInputQuery(typeof q === "string" ? q : "");
  }, [router.query]);

  useEffect(() => {
    if (isAppleDevice()) {
      setDeviceType("apple");
    } else {
      setDeviceType("other");
    }
  }, []);

  useEffect(() => {
    const handleCk = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey) {
        if (event.key?.toLowerCase() === "k") {
          event.preventDefault();
          inputRef.current.focus();
        }
      }
    };

    window.addEventListener("keydown", handleCk);

    return () => {
      window.removeEventListener("keydown", handleCk);
    };
  }, []);

  const debouncedOnSearch = useCallback(
    debounce((query: string) => {
      router.push({ pathname: searchPath, query: query ? { q: query } : null });
    }, 500),
    []
  );

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInputQuery(query);
    debouncedOnSearch(query);
  };

  return (
    <div className="sidebar pt3">
      <Heading isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="search p2">
        <input
          ref={inputRef}
          type="text"
          aria-label="search"
          className="px2 py1"
          placeholder={
            deviceType === "apple"
              ? "🔍 Search Icons (⌘ K)"
              : "🔍 Search Icons (Ctrl K)"
          }
          onChange={onSearch}
          value={inputQuery}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </div>

      <ul className={`sidebar--links ${isOpen && "active"}`}>
        <li>
          <ActiveLink href="/">
            <a className="rounded px2 py1">Home</a>
          </ActiveLink>
        </li>
        {iconsList.map((icon) => (
          <li key={icon.id}>
            <ActiveLink href={{ pathname: "icons", query: { name: icon.id } }}>
              <a
                className="rounded px2 py1"
                onClick={(e) => {
                  setInputQuery("");
                }}
              >
                {icon.name}
              </a>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
