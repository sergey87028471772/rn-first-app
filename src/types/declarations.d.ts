declare module '*.css' {
  const content: Record<string, string> | StyleProp<ViewStyle> | undefined;
  export default content;
}
