/**
 * Rule: Interface names must begin with the I prefix.
 * @author Ilya Sedov
 */
module.exports = {
  create(context) {
    return {
      TSInterfaceDeclaration(node) {
        if (node !== null && node.id.type === 'Identifier') {
          if (!/^I+[A-Z]/.test(node.id.name)) {
            context.report({
              message:
                'Interface names must start with a capital letter and be prefixed with I.',
              node: node.id
            });
          }
        }
      }
    };
  }
};
