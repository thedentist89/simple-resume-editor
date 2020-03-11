import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet
} from "@react-pdf/renderer";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import pin from "../assets/pin.png";

const color = "#805ad5";

const styles = StyleSheet.create({
  aside: {
    width: "30vw",
    paddingLeft: "10pt",
    paddingRight: "10pt"
  },
  main: {
    width: "65vw"
  },
  page: {
    paddingTop: "25pt",
    paddingBottom: "25pt",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontSize: "20pt",
    color: "white",
    backgroundColor: color,
    paddingTop: "40pt",
    paddingBottom: "40pt",
    paddingLeft: "40pt",
    paddingRight: "40pt"
  },
  image: {
    width: "120pt",
    height: "120pt",
    borderRadius: "100",
    marginLeft: "20pt",
    marginRight: "20pt"
  },
  header: {
    backgroundColor: color,
    height: "120pt",
    width: "120pt",
    color: "#fff"
  },
  icon: {
    height: 18,
    width: 18,
    marginTop: 10,
    marginBottom: 5
  }
});

const ModernPDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.aside}>
          <Image
            src="data:image/jpeg;base64,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"
            style={styles.image}
          />
          <View style={{ marginVertical: "20pt" }}>
            <Image style={styles.icon} source={mail} />
            <Text style={{ fontSize: "12pt" }}>mourad.eyes@gmail.com</Text>
            <Image style={styles.icon} source={phone} />
            <Text style={{ fontSize: "12pt" }}>+212690092625</Text>
            <Image style={styles.icon} source={pin} />
            <Text style={{ fontSize: "12pt" }}>Kenitra, Morocco</Text>
          </View>
          <View style={{ marginVertical: "20pt" }}>
            <Text
              style={{
                color: color,
                textTransform: "uppercase",
                fontWeight: "bold",
                borderBottom: `1pt solid ${color}`
              }}
            >
              Skills
            </Text>
            <View
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                paddingVertical: "14pt"
              }}
            >
              <Text
                style={{
                  backgroundColor: color,
                  color: "white",
                  padding: "4pt 2pt",
                  borderRadius: "4pt",
                  fontSize: "12pt",
                  marginVertical: "5pt",
                  marginRight: "4pt"
                }}
              >
                HTML
              </Text>
              <Text
                style={{
                  backgroundColor: color,
                  color: "white",
                  padding: "4pt 2pt",
                  borderRadius: "4pt",
                  fontSize: "12pt",
                  marginVertical: "5pt",
                  marginRight: "4pt"
                }}
              >
                CSS
              </Text>
              <Text
                style={{
                  backgroundColor: color,
                  color: "white",
                  padding: "4pt 2pt",
                  borderRadius: "4pt",
                  fontSize: "12pt",
                  marginVertical: "5pt",
                  marginRight: "4pt"
                }}
              >
                JavaScript
              </Text>
              <Text
                style={{
                  backgroundColor: color,
                  color: "white",
                  padding: "4pt 2pt",
                  borderRadius: "4pt",
                  fontSize: "12pt",
                  marginVertical: "5pt",
                  marginRight: "4pt"
                }}
              >
                Data visualisation
              </Text>
              <Text
                style={{
                  backgroundColor: color,
                  color: "white",
                  padding: "4pt 2pt",
                  borderRadius: "4pt",
                  fontSize: "12pt",
                  marginVertical: "5pt",
                  marginRight: "4pt"
                }}
              >
                SASS
              </Text>
              <Text
                style={{
                  backgroundColor: color,
                  color: "white",
                  padding: "4pt 2pt",
                  borderRadius: "4pt",
                  fontSize: "12pt",
                  marginVertical: "5pt",
                  marginRight: "4pt"
                }}
              >
                React
              </Text>
            </View>
            <View style={{ marginVertical: "20pt" }}>
              <Text
                style={{
                  color: color,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  borderBottom: `1pt solid ${color}`
                }}
              >
                Languages
              </Text>
              <View style={{ paddingVertical: "14pt" }}>
                <Text style={{ fontSize: 12, marginTop: 12 }}>Arabic</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 4
                  }}
                >
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      border: `2pt solid ${color}`,
                      marginRight: 4,
                      backgroundColor: color
                    }}
                  ></View>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      border: `2pt solid ${color}`,
                      marginRight: 4,
                      backgroundColor: color
                    }}
                  ></View>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      border: `2pt solid ${color}`,
                      marginRight: 4
                    }}
                  ></View>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      border: `2pt solid ${color}`,
                      marginRight: 4
                    }}
                  ></View>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      border: `2pt solid ${color}`
                    }}
                  ></View>
                </View>
                <Text style={{ fontSize: 12, marginTop: 12 }}>English</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 4
                  }}
                >
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      border: `2pt solid ${color}`,
                      marginRight: 4,
                      backgroundColor: color
                    }}
                  ></View>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      border: `2pt solid ${color}`,
                      marginRight: 4,
                      backgroundColor: color
                    }}
                  ></View>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      border: `2pt solid ${color}`,
                      marginRight: 4
                    }}
                  ></View>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      border: `2pt solid ${color}`,
                      marginRight: 4
                    }}
                  ></View>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      border: `2pt solid ${color}`
                    }}
                  ></View>
                </View>
                <Text style={{ fontSize: 12, marginTop: 12 }}>French</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 4
                  }}
                >
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      border: `2pt solid ${color}`,
                      marginRight: 4,
                      backgroundColor: color
                    }}
                  ></View>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      border: `2pt solid ${color}`,
                      marginRight: 4,
                      backgroundColor: color
                    }}
                  ></View>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      border: `2pt solid ${color}`,
                      marginRight: 4
                    }}
                  ></View>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      border: `2pt solid ${color}`,
                      marginRight: 4
                    }}
                  ></View>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 100,
                      border: `2pt solid ${color}`
                    }}
                  ></View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View
            style={{
              backgroundColor: color,
              paddingHorizontal: 20,
              paddingVertical: 20
            }}
          >
            <Text style={{ color: "white" }}>Mourad Aouinat</Text>
            <Text
              style={{
                color: "white",
                fontSize: "12pt",
                marginTop: "4pt"
              }}
            >
              Front-end Developer
            </Text>
            <View
              style={{
                height: "1pt",
                width: "120pt",
                backgroundColor: "white",
                marginTop: "4pt"
              }}
            ></View>
            <Text
              style={{
                color: "white",
                fontSize: "10pt",
                marginTop: "6pt",
                lineHeight: "1.3pt"
              }}
            >
              Meticulous web developer with over 2 years of front end experience
              and passion for responsive website design and a firm believer in
              the mobile-first approach. W3C certified. Implemented new
              responsive website approach which increased mobile traffic by 20%.
            </Text>
          </View>
          <View style={{ marginVertical: 30, paddingRight: 30 }}>
            <View>
              <Text
                style={{
                  color: color,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  borderBottom: `1pt solid ${color}`
                }}
              >
                work experience
              </Text>
              <View style={{ paddingVertical: 30 }}>
                <Text style={{ color, fontWeight: 900, fontSize: 20 }}>
                  Front-end Developer
                </Text>
                <Text>Gemography</Text>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    marginVertical: 10
                  }}
                >
                  <Text style={{ fontSize: 14 }}>12/19 - 02/20</Text>
                  <Text style={{ fontSize: 14 }}>Rabat, Morocco</Text>
                </View>
                <Text style={{ fontSize: 10 }}>
                  Developed various web applications using front-end
                  technologies like ReactJs Converted Client designs into
                  functional apps Helped point out various UI/UX holes in
                  designs
                </Text>
              </View>
              <Text
                style={{
                  color: color,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  borderBottom: `1pt solid ${color}`
                }}
              >
                education
              </Text>
              <View style={{ marginTop: 20 }}>
                <Text style={{ color, fontWeight: 900, fontSize: 16 }}>
                  Bachalor In Financial Management
                </Text>
                <Text style={{ fontSize: 14 }}>
                  Faculty of Economics and Business - Ibn Tofail
                </Text>
                <Text style={{ fontSize: 10 }}>2018 - 2019</Text>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ color, fontWeight: 900, fontSize: 16 }}>
                  Bachaloreat in Economics and Management
                </Text>
                <Text style={{ fontSize: 14 }}>Idriss Premier</Text>
                <Text style={{ fontSize: 10 }}>2013 - 2014</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ModernPDF;
