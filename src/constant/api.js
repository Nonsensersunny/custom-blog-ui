// API config
export const API_HOST = 'http://47.94.233.125'
export const API_PORT = 8081

// APIs
var USER_API_HEAD = API_HOST + '/' + API_PORT + '/' + 'user';
var ARTICLE_API_HEAD = API_HOST + '/' + API_PORT + '/' + 'article';

export default {
    register_direct: USER_API_HEAD + '/register',
    register_mail: USER_API_HEAD + '/mailregister',
    register_auth_mail: USER_API_HEAD + '/getmailauth',
    login: USER_API_HEAD + '/login',
    upload_md_file: USER_API_HEAD + '/upload',

    view_article_by_id: ARTICLE_API_HEAD + '/view',
}
