/**
 * Rule: Styles should be located in a file called styles.
 * @author Ilya Sedov
 */
module.exports = {
  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === 'styled-components') {
          if (!/styles./.test(context.getFilename())) {
            for (const i of node.specifiers) {
              if (i.imported.name === 'styled') {
                context.report({
                  message: 'Styles should be located in a file called styles.',
                  node: node
                });
                return;
              }
            }
          }
        }
      }
    };
  }
};
