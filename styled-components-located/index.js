/**
 * Правило запрещает импортировать стили куда-либо кроме файла styles
 */
module.exports = {
  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === 'styled-components') {
          // TODO возможно стоит переделать регулярку
          if (!/styles./.test(context.getFilename())) {
            for (let i of node.specifiers) {
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
