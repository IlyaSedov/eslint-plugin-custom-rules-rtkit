/**
 * Правило запрещает распологать type где либо кроме файла interfaces
 */
module.exports = {
  create(context) {
    return {
      TSTypeAliasDeclaration(node) {
        // TODO возможно стоит переделать регулярку
        if (!/interfaces./.test(context.getFilename())) {
          context.report({
            message: 'Type should be located in a file called Interfaces.',
            node: node.id
          });
        }
      }
    };
  }
};
