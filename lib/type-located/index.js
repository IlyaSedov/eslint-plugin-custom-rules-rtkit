/**
 * Rule: Type should be located in a file called interfaces\.
 * @author Ilya Sedov
 */
module.exports = {
  create(context) {
    return {
      TSTypeAliasDeclaration(node) {
        console.log('!!node',node)
        console.log('!!context',context)
        console.log('FileNAME',context.getFilename())

        console.log('!!FileNAME',!/interfaces\./.test(context.getFilename()))
        if (!/interfaces\./.test(context.getFilename())) {
          context.report({
            message: 'Type should be located in a file called interfaces\.',
            node: node.id
          });
        }
      }
    };
  }
};
