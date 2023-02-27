/**
 * Правило: название компонент styled-components должны начинатся с буквы S
 */
module.exports = {
  create(context) {
    return {
      VariableDeclaration(node) {
        for (const declaration of node.declarations) {
          if (
            declaration?.init?.parent?.id?.name &&
            !/^S+[A-Z]/.test(declaration.init.parent.id.name)
          ) {
            if (declaration.init?.type === 'CallExpression') {
              if (
                declaration.init.callee?.type === 'Identifier' &&
                (declaration.init.callee.name === 'styled' ||
                  declaration.init.callee.name === 'css' ||
                  declaration.init.callee.name === 'keyframes')
              ) {
                context.report({
                  message: 'styled-components should start with the letter S.',
                  node: node
                });
              }
            }
            if (declaration.init.type === 'TaggedTemplateExpression') {
              if (
                declaration.init.tag?.object?.type === 'Identifier' &&
                declaration.init.tag?.object?.name === 'styled'
              ) {
                context.report({
                  message: 'styled-components should start with the letter S.',
                  node: node
                });
              }
            }
          }
        }
      }
    };
  }
};
