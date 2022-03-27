import React, { Component } from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, StatusBar, View, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { JADWAL } from '../database/Data'; 

const Confirm = ({ route, navigation }) => {
    const data = route.params.text;
    const scheduleList = JADWAL.filter(item =>
        item.dermaga_keberangkatan === data.departure &&
        item.dermaga_tujuan === data.arrival &&
        item.kelas_layanan === data.service &&
        item.tanggal_masuk === data.date &&
        item.jam_masuk === data.time);
    console.log(scheduleList);

    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#cc00cc" />
        <SafeAreaView style={styles.container}>
          <View style={styles.main}>
            <Text style={styles.title}>Boatzy</Text>
            <Text style={styles.intitle}>Rincian Tiket</Text>
            <FlatList
              data={scheduleList}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <TouchableOpacity style={styles.detail_search}>
                    <View style={styles.detail_style}>
                      <Text style={styles.text}>
                        {JADWAL.find(
                          (theItem) =>
                            theItem.dermaga_keberangkatan ===
                            item.dermaga_keberangkatan
                        )}
                      </Text>
                      <Text style={styles.text}>
                        <Icon name="right" size={20} color="#000" />
                      </Text>
                      <Text style={styles.text}>
                        {JADWAL.find(
                          (theItem) =>
                            theItem.dermaga_tujuan === item.dermaga_tujuan
                        )}
                      </Text>
                    </View>
                    <Text style={styles.intitle}>Jadwal Masuk Pelabuhan</Text>
                    <Text style={styles.detailInfo}>
                      {JADWAL.find(
                        (theItem) =>
                          theItem.tanggal_masuk === item.tanggal_masuk
                      )}
                    </Text>
                    <Text style={styles.detailInfo}>
                      {JADWAL.find(
                        (theItem) => theItem.jam_masuk === item.jam_masuk
                      )}
                    </Text>
                    <Text style={styles.intitle}>Layanan</Text>
                    <Text style={styles.detailInfo}>
                      {JADWAL.find(
                        (theItem) =>
                          theItem.kelas_layanan === item.kelas_layanan
                      )}
                    </Text>
                    <View style={styles.detail_style}>
                      <Text style={styles.text}>Dewasa x 1</Text>
                      <Text style={styles.text}>Rp.65.000,00</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item) => item.jadwal_id}
            ></FlatList>
            <View style={styles.result_style}>
              <Text style={styles.textResult}>Total</Text>
              <Text style={styles.textResult}>Rp.65.000</Text>
            </View>
            <View style={styles.button_style}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={styles.backbuttonText}>Kembali</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => navigation.navigate("Confirm")}
              >
                <Text style={styles.confirmbuttonText}>Lanjutkan</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomBar}>
            <View style={styles.navbar}>
              <TouchableOpacity
                style={styles.buttonbottomBar}
                onPress={() => navigation.navigate("Home")}
              >
                <Icon name="home" size={30} color="#283593" />
                <Text style={styles.buttonbarText}>Beranda</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonbottomBar}
                onPress={() => navigation.navigate("Home")}
              >
                <Icon name="book" size={30} color="#283593" />
                <Text style={styles.buttonbarText}>Pesanan Saya</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonbottomBar}
                onPress={() => navigation.navigate("Home")}
              >
                <Icon name="ban" size={30} color="#283593" />
                <Text style={styles.buttonbarText}>Pembatalan</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonbottomBar}
                onPress={() => navigation.navigate("Home")}
              >
                <Icon name="grip-lines" size={30} color="#283593" />
                <Text style={styles.buttonbarText}>Lainnya</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        margin: 30,  
        marginTop: 50,  
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginVertical: 0,
        shadowColor: "#bababa",
        shadowOpacity: 10,
        shadowRadius: 5,
    },
    title: {
        color: '#283593',
        fontSize: 50,
        fontWeight: 'bold',
        letterSpacing: 2,
        textAlign: 'center',
        marginTop: 20,
        paddingBottom: 20    
    },
    intitle: {
        fontWeight: 'bold',
        padding: 10
    },
    search: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 20,
    },
    card: {
        marginHorizontal: 30,
    },
    detail_search: {
        backgroundColor: '#fff',
        color: '#000',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        elevation: 10,
    },
    detail_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    result_style: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        color: "#000",
        fontWeight: 'bold'
    },
    button_style: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    planeIcon: {
        marginRight: 10,
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },
    textResult: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10
    },
    detailInfo: {
        paddingBottom: 10
    },
    backButton: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#283593',
        color: '#283593',
        borderRadius: 5,
        marginHorizontal: 15,
        paddingVertical: 10,
        elevation: 2,
        marginBottom: 10,
        marginTop: 10
    },
    confirmButton: {
        borderWidth: 1,
        backgroundColor: '#283593',
        borderColor: '#283593',
        color: '#fff',
        borderRadius: 5,
        marginHorizontal: 15,
        paddingVertical: 10,
        elevation: 2,
        marginBottom: 10,
        marginTop: 10
    },
    backbuttonText: {
        color: '#283593',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingRight: 10,
        paddingLeft: 10
    },
    confirmbuttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingRight: 10,
        paddingLeft: 10
    },
    bottomBar: { 
        marginTop: 50,  
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 0,
        marginVertical: 0,
    },
    navbar: {
        flexDirection: 'row', 
        justifyContent: 'center',   
        alignItems: 'center',
    },
    buttonbottomBar: {
        marginHorizontal: 23,
        alignItems: 'center' 
    },
    buttonbarText: {
        color: '#283593',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 10,
    },
});

export default Confirm;