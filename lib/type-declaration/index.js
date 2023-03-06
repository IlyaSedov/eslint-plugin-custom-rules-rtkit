/**
 * Rule: Type names must start with a capital letter and be prefixed with T.
 * @author Ilya Sedov
 */
module.exports = {
  create(context) {
    return {
      TSTypeAliasDeclaration(node) {
        if (node !== null && node.id.type === 'Identifier') {
          if (!/^T+[A-Z]/.test(node.id.name)) {
            context.report({
              message:
                'Type names must start with a capital letter and be prefixed with T.',
              node: node.id
            });
          }
        }
      }
    };
  }
};
