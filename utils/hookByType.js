/**
 * Created by antoinemoreaux on 21/08/2016.
 */
module.exports = {

  js: (params) => {

    if(Buffer.isBuffer(params.fileContent)) {
      return params.fileContent = params.fileContent.toString().replace(/"/g, '');
    }

    params.fileContent = JSON.stringify(params.fileContent);
  },

  json: (params) => {

    if(Buffer.isBuffer(params.fileContent)) {
      params.fileContent = JSON.parse(params.fileContent);
    }

    params.fileContent = JSON.stringify(params.fileContent, null, 4);
  }
};