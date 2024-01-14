import { BookmarkIcon, PersonIcon } from "@radix-ui/react-icons";
import { Box, Button, Container, Flex, Heading, Section } from "@radix-ui/themes";
import Link from "next/link";

export const Navbar = () => {
    return (
        <Box>
            <Section size="2">
                <Flex direction="row">
                    {/* <menu className="flex justify-between items-center p-3 px-20 m-5 fixed top-0  mx-auto z-10 "> */}
                    <Container>
                        <Heading>XXXXXX YAPI DENETİM</Heading>
                        <div className="flex gap-10 ">
                            <Button>
                                <PersonIcon width="16" height="16" /> username
                            </Button>
                        </div>
                    </Container>
                    {/* </menu> */}
                </Flex>
            </Section>
        </Box>
    );
};