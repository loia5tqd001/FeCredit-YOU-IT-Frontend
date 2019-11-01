import React, { useState, useEffect, useRef } from "react"
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView
} from "react-native"
import { Button, TextInput } from "react-native-paper"
import { TextInputMask } from "react-native-masked-text"
import PickerModal from "react-native-picker-modal-view"
import { useNavigation } from "@react-navigation/core"
// import data from "../../top20"

const data = [ 
  {
    Name: "Hà Nội",
    Value: "Hà Nội",
    Id: "Hà Nội",
  },
  {
    Name: "Tp. Hồ Chí Minh",
    Value: "Tp. Hồ Chí Minh",
    Id: "Tp. Hồ Chí Minh",
  },
  {
    Name: "Bình Định",
    Value: "Bình Định",
    Id: "Bình Định",
  }
]

function useName() {
  const [name, setName] = useState("")

  const isNameValid = () => {
    return name.trim().length > 0
  }

  return [name, setName, , isNameValid]
}

function useDateOfBirth() {
  const [dob, setDob] = useState("")
  const dobRef = useRef()

  const isDobValid = () => {
    const isEnough14 = dobString => {
      const now = new Date()
      const [dd, mm, yyyy] = dobString.split("-")

      if (now.getFullYear() - yyyy > 14) return true
      if (now.getFullYear() - yyyy < 14) return false

      if (now.getMonth() > mm) return true
      if (now.getMonth() > mm) return false

      return now.getDate() >= dd
    }

    return dob.length === 10 && dobRef.current.isValid() && isEnough14(dob)
  }

  return [dob, setDob, dobRef, isDobValid]
}

function useIdNumber () {
  const [idNumber, setIdNumber] = useState("")

  const isIdNumberValid = () => {
    return /^\d{9}$/.test(idNumber)
  }

  return [idNumber, setIdNumber, , isIdNumberValid]
}

function useRegisterDate(dobString) {
  const [registedDate, setRegistedDate] = useState("")
  const registedDateRef = useRef()

  const isRegisterDateValid = () => {
    const isEnough14 = () => {
      const [_d, _m, _y] = registedDate.split("-")
      const [dd, mm, yyyy] = dobString.split("-")
      
      // check if registered date is bigger than "now"
      if (new Date(_y, _m-1, _d) > new Date()) return false

      if (_y - yyyy > 14) return true
      if (_y - yyyy < 14) return false

      if (_m > mm) return true
      if (_m < mm) return false

      return _d >= dd
    }

    return (
      registedDate.length === 10 &&
      registedDateRef.current.isValid() &&
      isEnough14()
    )
  }

  return [registedDate, setRegistedDate, registedDateRef, isRegisterDateValid]
}

export default function FormScreen(props) {
  const [
    name, 
    setName, 
    , 
    isNameValid
  ] = useName()
  const [
    dob, 
    setDob, 
    dobRef, 
    isDobValid
  ] = useDateOfBirth()
  const [
    idNumber,
    setIdNumber,
    ,
    isIdNumberValid
  ] = useIdNumber()
  const [
    registedDate,
    setRegistedDate,
    registedDateRef,
    isRegisterDateValid
  ] = useRegisterDate(dob)
  const [
    selectedAddress, 
    setSelectedAddress
  ] = useState({})
  const navigation = useNavigation()

  const onAddressSelected = selected => {
    setSelectedAddress(selected)
    return selected
  }

  return (
    <KeyboardAvoidingView enabled behavior="padding" style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Họ và tên (giống trên CMND) *"
          value={name}
          placeholder="Nguyễn Văn A"
          error={!isNameValid()}
          onChangeText={text => setName(text)}
        />

        <TextInput
          style={styles.input}
          mode="outlined"
          label="Ngày tháng năm sinh (giống trên CMND) *"
          value={dob}
          placeholder="DD-MM-YYYY"
          error={!isDobValid()}
          onChangeText={text => setDob(text)}
          render={props => (
            <TextInputMask
              {...props}
              ref={dobRef}
              type={"datetime"}
              options={{ format: "DD-MM-YYYY" }}
            />
          )}
        />

        <TextInput
          style={styles.input}
          mode="outlined"
          label="Số CMND *"
          value={idNumber}
          placeholder="123456789"
          error={!isIdNumberValid()}
          onChangeText={text => setIdNumber(text)}
          render={props => (
            <TextInputMask
              {...props}
              type={"custom"}
              options={{ mask: "999999999" }}
              keyboardType="number-pad"
            />
          )}
        />

        <TextInput
          style={styles.input}
          mode="outlined"
          label="Ngày đăng ký CMND *"
          value={registedDate}
          placeholder="DD-MM-YYYY"
          error={!isRegisterDateValid()}
          onChangeText={text => setRegistedDate(text)}
          render={props => (
            <TextInputMask
              {...props}
              ref={registedDateRef}
              type={"datetime"}
              options={{ format: "DD-MM-YYYY" }}
            />
          )}
        />

        <PickerModal
          renderSelectView={(disabled, selected, showModal) => (
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Nơi ĐKHK thường trú (giống trên CMND) *"
              value={selectedAddress.Value}
              onFocus={showModal}
            />
          )}
          onSelected={onAddressSelected}
          items={data}
          showAlphabeticalIndex={false}
          autoGenerateAlphabeticalIndex={true}
          searchPlaceholderText="Nhập tỉnh..."
          selected={selectedAddress}
          requireSelection={true}
        />
      </ScrollView>
      <Button
        style={styles.nextButton}
        mode="contained"
        onPress={() => navigation.push("FrontIdStack")}>
        <Text style={{ fontSize: 25 }} children="TIẾP TỤC" />
      </Button>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red"
  },
  scrollview: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 20
    // backgroundColor: "blue"
  },
  input: {
    margin: 10,
    width: "80%"
  },
  nextButton: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10
  }
})
