/**
 * Правило: названия интерфейса должно быть с буквы I
 */
module.exports = {
  create(context) {
    return {
      TSInterfaceDeclaration(node) {
        if (node !== null && node.id.type === 'Identifier') {
          if (!/^I+[A-Z]/.test(node.id.name)) {
            context.report({
              message:
                'This name should be written starting with the letter I.',
              node: node.id
            });
          }
        }
      }
    };
  }
};
