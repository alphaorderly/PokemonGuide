import { StyleSheet } from "react-native";
import { Colors } from "../../../themes/colors";

export default StyleSheet.create({
  MainWebView: {
    flex: 1,
  },
  WebView: {

  },
  ControlView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    height: 60,
    backgroundColor: Colors.DropdownBackground
  },
  ControlIcon: {
    alignSelf: 'center'
  },
  MemoModal: {
    backgroundColor: Colors.ContentBackground,
    flex: 1,
  },
  MemoWriteButton: {
    padding: 10,
    margin: 10,
    backgroundColor: Colors.ModalBackground,
    borderRadius: 12,
    justifyContent: 'center',
  },
  MemoWriteText: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'NanumSquareNeoTTF-cBd'
  },
  MemoList: {
    flex: 1,
  },
  MemoListElementView: {
    padding: 10,
    margin: 10,
    backgroundColor: Colors.DropdownBackground,
    borderRadius: 6,
    justifyContent: 'center',
  },
  MemoListElementText: {
    fontSize: 16,
    fontFamily: 'NanumSquareNeoTTF-bRg'
  },
  MemoArticleTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  MemoArticleTopText: {
    fontSize: 24,
    fontFamily: 'NanumSquareNeoTTF-eHv'
  },
  MemoArticleContent: {
    padding: 30,
  },
  MemoArticleContentText: {
    fontSize: 18,
    fontFamily: 'NanumSquareNeoTTF-bRg'
  },
  MemoWritingTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  MemoWritingTopTitleView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  MemoWritingTopTitleText: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
  MemoWritingTopTitleInput: {
    width: 10,
    flex: 1,
    height: 45,
    marginRight: 20,
    fontSize: 22,
    fontFamily: 'NanumSquareNeoTTF-bRg',
    borderBottomWidth: 1,
  },
  MemoWritingContentInput: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 18
  },
  MemoWritingSubmitButton: {
    height: 40,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  MemoWritingSubmitButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'NanumSquareNeoTTF-cBd'
  }
})