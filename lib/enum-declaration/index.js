/**
 * Rule: Enum must start with a capital letter and be prefixed with E
 * @author Ilya Sedov
 */
module.exports = {
  create(context) {
    return {
      TSEnumDeclaration(node) {
        if (node !== null && node.id.type === 'Identifier') {
          if (!/^E+[A-Z]/.test(node.id.name)) {
            context.report({
              message: 'Enum must start with a capital letter and be prefixed with E.',
              node: node.id
            });
          }
        }
      }
    };
  }
};
