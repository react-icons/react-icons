export interface IconDefinition {
  id: string;
  name: string;
  contents: IconDefinitionContent[];
  projectUrl: string;
  license: string;
  licenseUrl: string;
}

export interface IconDefinitionContent {
  files: string | (() => Promise<string[]>);
  formatter(camelName: string, filePath: string): string;
  multiColor?: boolean;
  processWithSVGO?: boolean;
}
