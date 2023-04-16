import { Col, Container, Row, Tab, Nav} from "react-bootstrap";
import "./index.scss"
import { ProjectsCard } from "../ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
export const Projects = ()=>{
    const projects = [
        {
            title: "Projects-one",
            description: "something",
            imgUrl: projImg1
        },
        {
            title: "Projects-one",
            description: "something",
            imgUrl: projImg2
        },
        {
            title: "Projects-one",
            description: "something",
            imgUrl: projImg3
        },
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>something</p>
                        <Tab.Container id = "project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center" id = "pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                Tab Three
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return(
                                               <ProjectsCard key={index} {...project}/>

                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className = "background-image-right" src={colorSharp2}/>
        </section>
    )
}