import React from "react";
import "../custom.scss"
import { Nav, Navbar, Table, NavDropdown } from "react-bootstrap"


function Contact() {
    return (
        <div className="font-face-gm">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Avdelning</th>
                        <th>Namn</th>
                        <th>Telefonnummer</th>
                        <th>E-mail</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Rektor</td>
                        <td>Åsa Frödin</td>
                        
                        <td><a href="tel:+46 18 40 46 30">018 40 46 30</a></td>
                        <td><a href="mailto:rektor@musikladan.se">rektor@musikladan.se</a></td>
                    </tr>
                    <tr>
                        <td>Bitr. rektor</td>
                        <td>Maria Klingvall</td>
                        <td><a href="tel:+46 18 40 46 30">018 40 46 30</a></td>
                        <td><a href="mailto:maria.klingvall@musikladan.se">maria.klingvall@musikladan.se</a></td>

                    </tr>
                    <tr>
                        <td>Skolsköterska</td>
                        <td>Mehrunnessa Arif</td>
                        <td><a href="tel:+46 18 40 46 36">018 40 46 3Mu6</a></td>
                        <td><a href="mailto:mehrunnessa.arif@musikladan.se">mehrunnessa.arif@musikladan.se</a></td>

                    </tr>
                    
                    
                </tbody>
            </Table>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Avdelning</th>
                        
                        <th>Telefonnummer</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Personalrum</td>
                        
                        <td><a href="tel:+46 18 40 46 86">018 40 46 86</a></td>
                    </tr>
                    <tr>
                        <td>Musiklådans Fritidshem</td>
                        
                        <td><a href="tel:+46 18 40 46 93">018 40 46 93</a></td>
                    </tr>
                    <tr>
                        <td>Stora Fritids</td>
                        
                        <td><a href="tel:+46 738484642">0738 48 46 42</a></td>
                    </tr>
                    
                    <tr>
                        <td>Lilla Fritids</td>
                        
                        <td><a href="tel:+46 738384693">0738 38 46 93</a></td>
                    </tr>
                </tbody>
            </Table>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Styrelsen</th>
                        <th>Namn</th>
                        
                        <th>E-mail</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ordförare</td>
                        <td>Ljiljana Gubeljic</td>
                        
                        
                        <td><a href="mailto:styrelsen@musikladan.se">styrelsen@musikladan.se</a></td>
                    </tr>
                    <tr>
                        <td>Sekreterare</td>
                        <td>Björn Eriksson</td>
                        
                        <td><a href="mailto:hemmabjorn@gmail.com">hemmabjorn@gmail.com</a></td>

                    </tr>
                    
                    
                </tbody>
            </Table>
        </div>);
}

export default Contact;