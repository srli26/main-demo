// Card component is a reusable component. When I change the styles of Card, all cards will be updated.
import Card from '../components/Card';
import Button from '../components/Button';

const Projects = () => {
    return (
        <div>
            <h2 className="mb-3">My Projects</h2>
            {/* Setup a bootstrap grid system */}
            <div className="row">
                <div className="col">
                    <Card>
                        <h3>Project 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        {/* Set up versatile reusable components */}
                        <Button color="primary">View Details</Button>
                    </Card>
                </div>
                <div className="col">
                    <Card>
                    <h3>Project 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    <Button color="secondary">View Details</Button>
                    </Card>
                </div>
                <div className="col">
                    <Card>
                    <h3>Project 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    <Button>View Details</Button>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Projects;