
/**
 * Rule: Enum properties must be in upper case.
 * @author Ilya Sedov
 */
module.exports = {
  create(context) {
    return {
      TSEnumDeclaration(node) {
        if (node.members !== null) {
          for (const member of node.members) {
            if (/[a-z]/.test(member.id.name)) {
              context.report({
                message: 'Enum properties must be in upper case.',
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
      description: 'Enum properties must be in upper case.',
      recommended: 'error'
    },
    messages: {
      uppercase: 'Enum properties must be in upper case.'
    },
    type: 'suggestion',
    schema: []
  },
};
