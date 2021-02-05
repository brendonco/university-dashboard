import Layout from '../../components/Layout';

const downloadTxtFile = () => {
    const element = document.createElement('a');
    const file = new Blob([document.getElementById('input').value], {
        type: 'application/json;charset=utf-8'
    });
    element.href = URL.createObjectURL(file);
    element.download = 'users.json';
    document.body.appendChild(element);
    element.click();
};

const Newsletter = () => (
    <Layout>
        <input id="input" />
        <button onClick={downloadTxtFile}>Download</button>
    </Layout>
);

export default Newsletter;
