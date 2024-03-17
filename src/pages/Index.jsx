import React from "react";
import { Box, Heading, Text, Image, Flex, Stack, Link, Icon, SimpleGrid } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1",
    image: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMDY5MTk2NHww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "https://project1.com",
  },
  {
    title: "Project 2",
    description: "A brief description of project 2",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwcm9qZWN0JTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTA2OTE5NjV8MA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "https://project2.com",
  },
  {
    title: "Project 3",
    description: "A brief description of project 3",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMDY5MTk2NXww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "https://project3.com",
  },
];

const skills = ["JavaScript", "React", "Node.js", "HTML", "CSS", "UI/UX Design", "Data Analysis", "Project Management"];

const Index = () => {
  return (
    <Box maxWidth="960px" margin="0 auto" padding="40px">
      <Flex alignItems="center" marginBottom="40px">
        <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG9mJTIwa3lsYSUyMGFydW5nYXxlbnwwfHx8fDE3MTA2OTE5NjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Kyla Arunga" borderRadius="full" boxSize="150px" marginRight="20px" />
        <Box>
          <Heading as="h1" size="xl">
            Kyla Arunga
          </Heading>
          <Text fontSize="xl">Software Engineer & Web Developer</Text>
        </Box>
      </Flex>

      <Box marginBottom="40px">
        <Heading as="h2" size="lg" marginBottom="20px">
          About Me
        </Heading>
        <Text>Hi, I'm Kyla! I'm a passionate software engineer with experience in web development, mobile app development, and data analysis. I enjoy creating elegant and efficient solutions to complex problems.</Text>
      </Box>

      <Box marginBottom="40px">
        <Heading as="h2" size="lg" marginBottom="20px">
          Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing="20px">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} isExternal>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={project.image} alt={project.title} />
                <Box p="6">
                  <Heading as="h3" size="md" marginBottom="10px">
                    {project.title}
                  </Heading>
                  <Text>{project.description}</Text>
                </Box>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Box>

      <Box marginBottom="40px">
        <Heading as="h2" size="lg" marginBottom="20px">
          Skills
        </Heading>
        <Flex flexWrap="wrap">
          {skills.map((skill, index) => (
            <Box key={index} backgroundColor="gray.200" borderRadius="lg" paddingX="10px" paddingY="5px" marginRight="10px" marginBottom="10px">
              {skill}
            </Box>
          ))}
        </Flex>
      </Box>

      <Box>
        <Heading as="h2" size="lg" marginBottom="20px">
          Contact
        </Heading>
        <Stack direction="row" spacing="20px">
          <Link href="https://github.com/kylaarunga" isExternal>
            <Icon as={FaGithub} boxSize="30px" />
          </Link>
          <Link href="https://www.linkedin.com/in/kylaarunga" isExternal>
            <Icon as={FaLinkedin} boxSize="30px" />
          </Link>
          <Link href="mailto:kyla.arunga@example.com" isExternal>
            <Icon as={FaEnvelope} boxSize="30px" />
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
