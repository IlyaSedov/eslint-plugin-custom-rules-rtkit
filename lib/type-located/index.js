/**
 * Rule: Type should be located in a file called Interfaces.
 * @author Ilya Sedov
 */
module.exports = {
  create(context) {
    return {
      TSTypeAliasDeclaration(node) {
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
