const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require("path");

const defaultSourceExts = ['js', 'jsx', 'json', 'ts', 'tsx']

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    sourceExts: [...defaultSourceExts, 'css'],
    
    extraNodeModules: {
      '~': path.resolve(__dirname +  "/src"), 
    },

    resolveRequest: (context, moduleName, platform) => {
      if (moduleName.includes('/web/file-picker/FilePicker')) {
        return {
          filePath: path.resolve(__dirname + "/src/5_shared/config/import-plugs/WebFilePicker.tsx"),
          type: 'sourceFile',
        };
      }

      if (moduleName.includes('/web/pdf-reader/PdfReader')) {
        return {
          filePath: path.resolve(__dirname + "/src/5_shared/config/import-plugs/WebPdfReader.tsx"),
          type: 'sourceFile',
        };
      }

      if (moduleName.includes('react-pdf/dist/esm/Page/AnnotationLayer.css')) {
        return {
          filePath: path.resolve(__dirname + "/src/5_shared/config/import-plugs/AnnotationLayer.css"),
          type: 'sourceFile',
        };
      }

      if (moduleName.includes('react-pdf/dist/esm/Page/TextLayer.css')) {
        return {
          filePath: path.resolve(__dirname + "/src/5_shared/config/import-plugs/TextLayer.css"),
          type: 'sourceFile',
        };
      }

      // chain to the standard Metro resolver.
      return context.resolveRequest(context, moduleName, platform);
    }
  },

  transformer: {
    babelTransformerPath: require.resolve("react-native-css-transformer"),
  },
}
    
module.exports = mergeConfig(getDefaultConfig(__dirname), config);
