/**
 * Rule: styled-components must start with a capital letter and be prefixed with S.
 * @author Ilya Sedov
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
                declaration.init.callee.name === 'styled'
              ) {
                context.report({
                  message: 'styled-components must start with a capital letter and be prefixed with S.',
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
                  message: 'styled-components must start with an S prefix.',
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
