import styled from "@react-pdf/styled-components";

export const ProfileImage = styled.Image`
  width: 120pt;
  height: 120pt;
  border-radius: 100;
  margin-left: 20pt;
  margin-right: 20pt;
`;

export const Container = styled.View`
  padding-top: 25pt;
  padding-bottom: 25pt;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Main = styled.View`
  width: 65vw;
`;

export const Header = styled.View`
  background-color: ${props => props.color};
  padding: 20pt 20pt;
`;

export const Name = styled.Text`
  color: white;
`;

export const Role = styled.Text`
  color: white;
  font-size: 12pt;
  margin-top: 4pt;
`;

export const Line = styled.View`
  height: 1pt;
  width: 120pt;
  background-color: white;
  margin-top: 4pt;
`;

export const Description = styled.Text`
  color: white;
  font-size: 10pt;
  margin-top: 6pt;
  line-height: 1.3pt;
`;

export const SectionHeading = styled.Text`
  color: ${props => props.color};
  text-transform: uppercase;
  font-weight: bold;
  border-bottom: 1pt solid ${props => props.color};
`;

export const JobTitle = styled.Text`
  color: ${props => props.color};
  font-weight: 900;
  font-size: 20;
`;

export const FlexBetween = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 10;
  margin-bottom: 10;
`;

export const Aside = styled.View`
  width: 30vw;
  padding-left: 10pt;
  padding-right: 10pt;
`;

export const Icon = styled.Image`
  height: 18;
  width: 18;
  margin-top: 10;
  margin-bottom: 5;
`;

export const AsideHeading = styled.Text`
  color: ${props => props.color};
  text-transform: uppercase;
  font-weight: bold;
  border-bottom: 1pt solid ${props => props.color};
`;

export const AsideSkills = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-top: 14pt;
  padding-bottom: 14pt;
`;

export const Skill = styled.Text`
  background-color: ${props => props.color};
  color: white;
  padding: 4pt 2pt;
  border-radius: 4pt;
  font-size: 12pt;
  margin-top: 5pt;
  margin-bottom: 5pt;
  margin-right: 4pt;
`;

export const LanguageContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 4;
`;

export const Circle = styled.View`
  height: 20;
  width: 20;
  border-radius: 100;
  border: 2pt solid ${props => props.color};
  margin-right: 4;
  background-color: ${props => (props.empty ? "white" : props.color)};
`;
