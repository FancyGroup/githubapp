const chmod = require('chmod');
export default function wxChmod(path:string) {
    chmod(path, 777);
}