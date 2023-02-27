/**
 * Правило запрещает распологать интерфесы где либо кроме файла interfaces
 */
module.exports = {
  create(context) {
    return {
      TSInterfaceDeclaration(node) {
        // TODO возможно стоит переделать регулярку
        if (!/interfaces./.test(context.getFilename())) {
          context.report({
            message: 'Interfaces should be located in a file called interfaces.',
            node: node.id
          });
        }
      }
    };
  }
};
