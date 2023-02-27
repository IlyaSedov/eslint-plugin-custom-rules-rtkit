/**
 * Правило: название Enum должно начинатся с буквы E
 */
module.exports = {
  create(context) {
    return {
      TSEnumDeclaration(node) {
        if (node !== null && node.id.type === 'Identifier') {
          if (!/^E+[A-Z]/.test(node.id.name)) {
            context.report({
              message: 'This name should be written starting with the letter E.',
              node: node.id
            });
          }
        }
      }
    };
  }
};
