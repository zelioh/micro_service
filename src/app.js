export class Navbar extends React.Component
{
    render()
    {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand">AMAZOFF</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Accueil <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">catégorie</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Catégorie
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Musique</a>
                            <a className="dropdown-item" href="#">Cuisine</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">( ͡° ͜ʖ ͡°)</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Chercher un produit" aria-label="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Chercher</button>
                    </form>
                </div>
            </nav>
            );
    }
}

export class Body extends React.Component
{
    render()
    {
        let rand = Math.floor(Math.random() * 1000);
        return (
            <div className="card mb-4">
                <img className="card-img-top" src={"https://picsum.photos/id/" + rand + "/200/200"} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.id}</h5>
                    <p className="card-text">bla bla bla</p>
                    <div className="d-flex justify-content-around align-items-center">
                        <button type="button" className="btn btn-outline-primary" data-toggle="" data-target="#">ACHETER</button>
                    </div>
                </div>
            </div>
        );
    }
}

export class Footer extends React.Component
{

    render()
    {
        return (
            <footer className="mainfooter" role="contentinfo">
                <div className="footer-middle">
                <div className="container">
                    <div className="row">
                    <div className="col-md-3 col-sm-6">

                        <div className="footer-pad">
                        <h4>Paiement</h4>
                        <ul className="list-unstyled">
                            <li><a href="#"></a></li>
                            <li><a href="#">On</a></li>
                            <li><a href="#">Aime</a></li>
                            <li><a href="#">Vraiment</a></li>
                            <li><a href="#">Beaucoup</a></li>
                            <li><a href="#">L'argent</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">

                        <div className="footer-pad">
                        <h4>À propos</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">Tuto site</a></li>
                            <li><a href="#">Accessibilité</a></li>
                            <li><a href="#">Mentions légales</a></li>
                            <li><a href="#">Vos données</a></li>
                            <li><a href="#">Nos ÉNORMES talents</a></li>
                            <li><a href="#">Nous contacter</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">

                        <div className="footer-pad">
                        <h4>Oui</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">Certes</a></li>
                            <li><a href="#">Bien</a></li>
                            <li><a href="#">D'accord</a></li>
                            <li>
                            <a href="#"></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                        <div className="col-md-3">
                            <h4>Suivez-nous !</h4>
                            <ul className="social-network social-circle">
                            <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" className="icoInstagram" title="Instagram"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#" className="icoPinterest" title="Pinterest"><i className="fa fa-pinterest"></i></a></li>
                            </ul>				
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 copy">
                            <p className="text-center">&copy; Copyright 2020 - AMAZOFF, tous droits réservés</p>
                        </div>
                    </div>


                </div>
                </div>
                </footer>
            );
    }
}