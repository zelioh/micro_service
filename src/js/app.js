export class Head extends React.Component
{
    constructor(props) {
        super(props);
    }

    render()
    {
        return (
            <div>Amazon like !</div>
        );
    }
}
if (document.getElementById('root')) {
    ReactDOM.render(
        <Head/>,
        document.getElementById('root')
    );
}