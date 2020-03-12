import React, { useContext, useState, useEffect } from "react";
import { DocumentContext } from "../context/DocumentContext";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
  PDFViewer
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
  const { img, values } = useContext(DocumentContext);

  return (
    <PDFViewer className="w-full h-screen">
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.aside}>
            <Image src={img} style={styles.image} />
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
              <Text style={{ color: "white" }}>{values.name}</Text>
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
                Meticulous web developer with over 2 years of front end
                experience and passion for responsive website design and a firm
                believer in the mobile-first approach. W3C certified.
                Implemented new responsive website approach which increased
                mobile traffic by 20%.
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
    </PDFViewer>
  );
};

export default ModernPDF;
