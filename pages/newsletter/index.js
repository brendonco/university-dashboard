import Layout from '../../components/Layout';

export const downloadJSONFile = () => {
    const element = document.createElement('a');
    const file = new Blob([document.getElementById('email').value], {
        type: 'application/json;charset=utf-8'
    });
    element.href = URL.createObjectURL(file);
    element.download = 'users.json';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};

const Newsletter = () => (
    <Layout>
        <input id="email" placeholder="Email address" />
        <button onClick={downloadJSONFile}>Download</button>
    </Layout>
);

export default Newsletter;
