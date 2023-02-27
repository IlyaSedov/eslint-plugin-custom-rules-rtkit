/**
 * Правило: названия типа должно быть с буквы T
 */
module.exports = {
  create(context) {
    return {
      TSTypeAliasDeclaration(node) {
        if (node !== null && node.id.type === 'Identifier') {
          if (!/^T+[A-Z]/.test(node.id.name)) {
            context.report({
              message:
                'This name should be written starting with the letter T.',
              node: node.id
            });
          }
        }
      }
    };
  }
};
