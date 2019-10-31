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
import data from "../../top20"

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

      if (mm > now.getMonth()) return true
      if (mm < now.getMonth()) return false

      return dd >= now.getDate()
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

      if (_y - yyyy > 14) return true
      if (_y - yyyy < 14) return false

      if (mm > _m) return true
      if (mm < _m) return false

      return dd >= _d
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
  // const [name, setName] = useState("")
  // const nameRef = useRef()

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

  const [address, setAddress] = useState("")
  const addressRef = useRef()

  const [selectedItem, setSelectedItem] = useState({})
  onClosed = () => {
    console.log("close key pressed")
  }

  onSelected = selected => {
    this.setState({ selectedItem: selected })

    return selected
  }

  onBackButtonPressed = () => {
    console.log("back key pressed")
  }
  return (
    <KeyboardAvoidingView enabled behavior="height" style={styles.container}>
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
            <Button
              disabled={disabled}
              title={"Show me!"}
              onPress={showModal}
            />
          )}
          onSelected={onSelected}
          onClosed={onClosed}
          onBackButtonPressed={onBackButtonPressed}
          items={data}
          sortingLanguage={"tr"}
          showToTopButton={true}
          selected={selectedItem}
          showAlphabeticalIndex={true}
          autoGenerateAlphabeticalIndex={true}
          selectPlaceholderText={"Choose one..."}
          onEndReached={() => console.log("list ended...")}
          searchPlaceholderText={"Search..."}
          requireSelection={false}
          autoSort={false}
        />
      </ScrollView>
      <Button
        style={styles.nextButton}
        mode="contained"
        onPress={() => console.log("go to next window")}>
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
