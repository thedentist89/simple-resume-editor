import React, { useContext, Fragment } from "react";
import { DocumentContext } from "../context/DocumentContext";
import { colors } from "../data.json";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import pin from "../assets/pin.png";
import { Page, Text, View, Document, PDFViewer } from "@react-pdf/renderer";
import { range } from "lodash";
import {
  Container,
  Aside,
  ProfileImage,
  Icon,
  AsideHeading,
  AsideSkills,
  Skill,
  Circle,
  Main,
  LanguageContainer,
  Header,
  Role,
  Name,
  Line,
  Description,
  JobTitle,
  FlexBetween,
  SectionHeading
} from "./styles";

const ModernPDF = () => {
  const { state } = useContext(DocumentContext);

  const {
    personalInfo,
    workExperience,
    education,
    languages,
    currentColor
  } = state;

  const { color } = colors.find(color => currentColor === color.color);

  return (
    <PDFViewer className="w-full h-screen">
      <Document>
        <Page size="A4">
          <Container>
            <Aside>
              <ProfileImage src={personalInfo.image} />
              <View style={{ marginVertical: "20pt" }}>
                <Icon source={mail} />
                <Text style={{ fontSize: "12pt" }}>{personalInfo.email}</Text>
                <Icon source={phone} />
                <Text style={{ fontSize: "12pt" }}>{personalInfo.phone}</Text>
                <Icon source={pin} />
                <Text style={{ fontSize: "12pt" }}>
                  {personalInfo.location}
                </Text>
              </View>
              <View style={{ marginVertical: "20pt" }}>
                <AsideHeading color={color}>Skills</AsideHeading>
                <AsideSkills>
                  {personalInfo.skills.split(",").map((skill, index) => (
                    <Skill color={color} key={index}>
                      {skill}
                    </Skill>
                  ))}
                </AsideSkills>
                <View style={{ marginVertical: "20pt" }}>
                  <AsideHeading>Languages</AsideHeading>
                  <View style={{ paddingVertical: "14pt" }}>
                    {languages.map(language => (
                      <Fragment key={language.id}>
                        <Text style={{ fontSize: 12, marginTop: 12 }}>
                          {language.name}
                        </Text>
                        <LanguageContainer>
                          {range(5).map(n =>
                            n < language.level ? (
                              <Circle color={color} key={n} />
                            ) : (
                              <Circle empty color={color} key={n} />
                            )
                          )}
                        </LanguageContainer>
                      </Fragment>
                    ))}
                  </View>
                </View>
              </View>
            </Aside>
            <Main>
              <Header color={color}>
                <Name>{personalInfo.name}</Name>
                <Role>{personalInfo.title}</Role>
                <Line />
                <Description>{personalInfo.bio}</Description>
              </Header>
              <View style={{ marginVertical: 30, paddingRight: 30 }}>
                <SectionHeading color={color}>work experience</SectionHeading>
                {workExperience.map(work => (
                  <View style={{ paddingVertical: 30 }} key={work.id}>
                    <JobTitle color={color}>{work.role}</JobTitle>
                    <Text>{work.company}</Text>
                    <FlexBetween>
                      <Text style={{ fontSize: 14 }}>
                        {work.start} - {work.end}
                      </Text>
                      <Text style={{ fontSize: 14 }}>{work.location}</Text>
                    </FlexBetween>
                    <Text style={{ fontSize: 10 }}>{work.description}</Text>
                  </View>
                ))}
                <SectionHeading color={color}>education</SectionHeading>
                {education.map(education => (
                  <View style={{ marginTop: 20 }} key={education.id}>
                    <Text style={{ color, fontWeight: 900, fontSize: 16 }}>
                      {education.degree}
                    </Text>
                    <Text style={{ fontSize: 14 }}>{education.school}</Text>
                    <Text style={{ fontSize: 10 }}>
                      {education.start} - {education.end}
                    </Text>
                  </View>
                ))}
              </View>
            </Main>
          </Container>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default ModernPDF;
