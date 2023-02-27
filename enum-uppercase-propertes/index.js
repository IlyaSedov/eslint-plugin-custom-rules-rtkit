
/**
 * Правило на проверку свойств Enum на строчные буквы в названии
 */
module.exports = {
  create(context) {
    return {
      TSEnumDeclaration(node) {
        if (node.members !== null) {
          for (const member of node.members) {
            if (/[a-z]/.test(member.id.name)) {
              context.report({
                message: 'This name must be written an upper-case letter.',
                node: member?.id
              });
            }
          }
        }
      }
    };
  },
  meta: {
    docs: {
      description: 'Enum propertes should upper-case.',
      recommended: 'error'
    },
    messages: {
      uppercase: 'This name must be written an upper-case letter.'
    },
    type: 'suggestion',
    schema: []
  },
};
