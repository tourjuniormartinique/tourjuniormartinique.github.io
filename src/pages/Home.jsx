import React, { useState } from "react";
import Navbar from "../components/Navbar";
import StageBar from "../components/StageBar";
import CyclingMarquee from "../components/CyclingMarquee";
import Equipes from "../components/Equipes";
import Stage from "../components/Stage";
import LogoPartn from "../components/LogosPartn";
import MerciMarquee from "../components/MerciMarquee";
import Jerseys from "../components/Jerseys";
import "../styles/Home.css";



const Home = () => {
    // états pour contrôler l'affichage des modals
    const [showPrestourModal, setShowPrestourModal] = useState(false);

    return (
        <div className="home" id="home" >
            <section className="home-header">
                <ul className="tag">
                    <li>
                        #JeunesChampions
                    </li>
                    <li>
                        #DéfiSportif
                    </li>
                    <li>
                        #RideTogether
                    </li>
                </ul>
                <StageBar className="home-stagebar" />
                <h1 className="title">Tour Cycliste <span className="w-color">Junior</span> de Martinique</h1>
                <div className="logonavb">
                <img src="/images/logoweb.png" alt="logo du tour"/>
                </div>
                <Navbar />
            </section>

            <ul className="nombers-section">
                <li>
                    <h2>6 276</h2>
                    <p>Mètres de dénivelé+</p>
                </li>
                <li>
                    <h2>381,59</h2>
                    <p>Kilomètres de course</p>
                </li>
                <li>
                    <h2>68</h2>
                    <p>Participants</p>
                </li>
                <li>
                    <h2>9</h2>
                    <p>Équipes</p>
                </li>
            </ul>

            <div className="home-pres">
                <section className="pres-sct">
                    <h2>Tour Cycliste Junior de Martinique 2025</h2>
                    <p>Organisé par la Jeunesse Cycliste 231, le Tour Cycliste Junior de Martinique revient du 1er au 4 mai 2025 pour une nouvelle édition palpitante !
                        Cette compétition rassemble les meilleurs jeunes cyclistes de Martinique, Guadeloupe, Guyane, France et Sainte-lucie, prêts à s’affronter sur un parcours exigeant à travers notre île.</p>
                    <p>🚴‍♂️ Un rendez-vous incontournable pour tous les passionnés de cyclisme !</p>
                    <figure>
                        <i class="fa-solid fa-circle-play"></i>
                        <figcaption><a className="live-btn" href="https://www.facebook.com/caraibesport/?locale=fr_FR" target="_blank" rel="noopener noreferrer">suivre le live</a></figcaption>
                    </figure>
                </section>

                <div className="card-ctn">
                    <figure className="card card-prestour">
                        <figcaption>Présentation du tour</figcaption>
                        <div>
                            <button
                                className="btn-pres"
                                onClick={() => setShowPrestourModal(true)}
                            >
                                en savoir plus
                            </button>
                            <p> Un événement qui célèbre la jeunesse, la passion et le goût de l’effort.</p>
                        </div>
                    </figure>
                    <figure className="card card-parcours">
                        <figcaption>Découvrir le parcours</figcaption>
                        <div>
                            <a href="#stages">en savoir plus</a>
                            <p>Un tracé unique entre mer et montagnes, offrant un défi de taille aux jeunes cyclistes.</p>
                        </div>
                    </figure>
                </div>
            </div>
            <div>
                <CyclingMarquee /> {/* Ajout de la bande défilante */}
            </div>
            {/*Nouvelle section dynamique */}
            <section className="info-section" id="contact">
                <div className="info-grid">
                    {/* Bloc principal avec tracé */}
                    <div className="info-main">
                        <h2 className="info-title">Martinique</h2>
                        <img src="/images/mqcard2.png" alt="Carte du parcours" className="info-map" />
                    </div>

                    {/* Blocs informatifs */}
                    <div className="info-card white">
                        <h3>PASSION</h3>
                        <p>Plus qu’une course, cet événement est une véritable fête du cyclisme, mêlant sport, passion et dépassement de soi. Suivez la compétition en direct et vibrez au rythme des exploits de ces futurs champions !</p>
                    </div>
                    <div className="info-card light-blue">
                        <h3>ENGAGEMENT</h3>
                        <p>Soutenir le Tour, c’est s’engager pour la jeunesse, le sport et le vivre-ensemble.
                            Un événement porteur de sens, qui valorise l’effort, la solidarité et l’excellence.
                            Une action visible, humaine et profondément ancrée dans le territoire.</p>
                    </div>
                    <div className="info-link">
                        <a href="mailto: ass.jeunessecycliste231@gmail.com">devenir partenaire</a>
                    </div>
                    <div className="info-card white">
                        <h3>ORGANISATION</h3>
                        <p>
                            Une logistique maîtrisée, une équipe expérimentée et un déroulement fluide à chaque étape : votre marque associée à un événement professionnel et bien structuré.
                        </p>
                    </div>
                    <div className="info-card image-card">
                        <img src="/images/petite-montagne.png" alt="Paysage montagneux" />
                    </div>
                    <div className="info-card blue">
                        <h3> IMPACT</h3>
                        <p>Plus de 500 jeunes talents révélés et des milliers de spectateurs conquis chaque année.
                            Une audience en constante progression sur les réseaux sociaux.
                            Le Tour, un véritable tremplin pour les marques qui veulent rayonner.</p>
                    </div>
                    <div className="info-card image-card mini">
                        <img src="/images/biker4.png" alt="Illustration d'un cycliste" />
                        <img className="jc-img" src="/images/jc231.png" alt="Illustration jc231" />
                    </div>
                </div>
            </section>
            <Stage />
            <Equipes />
            <Jerseys />
            <section className="sponsors" id="sponsors">
                <h2>Partenaires du Tour</h2>
                <LogoPartn />
                <MerciMarquee />
                <img className="montagne" src="/images/montagne4.png" alt="présentation des sponsors" />
            </section>

            {/* --- MODAL “Présentation du tour” --- */}
            {showPrestourModal && (
                <div
                    className="modal-overlay"
                    onClick={() => setShowPrestourModal(false)}
                >
                    <div
                        className="modal-content modal-pres"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close"
                            onClick={() => setShowPrestourModal(false)}
                        >
                            ✖
                        </button>
                        <h2>Présentation du Tour</h2>

                        <p>La Martinique, joyau aux panoramas entre mer et montagnes, accueille du 1ᵉʳ au 4 mai 2025 la 19ᵉ édition du Tour cycliste junior. Cette épreuve U19, plébiscitée par les équipes de la Caraïbe et de l’île voisine, se déploie sur cinq étapes variées – littoral, plaines verdoyantes et ascensions – pour offrir à sprinteurs, baroudeurs, grimpeurs et rouleurs un défi à la mesure de leur talent.</p>

                        <p>Porté par l’énergie et la passion de bénévoles, la course bénéficie du soutien des partenaires institutionnels (Préfecture, DRAJES, communes étapes) et privés. Chaque jour, le public se presse le long du parcours et la presse relaie en continu les exploits des jeunes champions.</p>

                        <p>Au-delà de la compétition, c’est une célébration du cyclisme, un moment de partage et de convivialité où se forgent les héros de demain. <br /> 🙏 Merci à tous ceux qui rendent cette aventure possible ; profitez pleinement de cette édition et que le meilleur gagne ! 🚴‍♂️</p>

                        <p>
                            <a href="/tcjm2025-pres-partenaires.pdf" download="tcjm2025-pres-partenaires.pdf" class="download-gpx">📥 Documentation partenaires</a>
                        </p>
                        <p>
                            <a href="/infos-generales.pdf" download="informations-générales.pdf" class="download-gpx">📥 Documentation participants </a>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;

