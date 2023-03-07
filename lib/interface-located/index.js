/**
 * Rule: Interfaces should be located in a file called interfaces\.
 * @author Ilya Sedov
 */
module.exports = {
  create(context) {
    return {
      TSInterfaceDeclaration(node) {
        if (!/interfaces\./.test(context.getFilename())) {
          context.report({
            message: 'Interfaces should be located in a file called interfaces\.',
            node: node.id
          });
        }
      }
    };
  }
};
