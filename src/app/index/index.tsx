import { MaterialIcons } from "@expo/vector-icons";
import { View, Image, TouchableOpacity, FlatList, Modal, Text } from "react-native";

import { colors } from "@/styles/colors";
import { styles } from "./styles";

import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { Categories } from "@/components/categories";

export default function Index() {
  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Image source={ require("@/assets/logo.png") } style={ styles.logo } />

        <TouchableOpacity activeOpacity={0.5}>
          <MaterialIcons name="add" size={32} color={colors.red[300]} />
        </TouchableOpacity>
      </View>

      <Categories />  

      <FlatList
        data={ [1, 2, 3, 4, 5, 6, 7, 8] }
        renderItem={ () => (
          <Link name="Google" url="https://www.google.com" onDetails={() => {}} />
        )}
        style = {styles.links}
        contentContainerStyle = {styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={true}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Cursos</Text>

              <TouchableOpacity activeOpacity={0.5}>
                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
              </TouchableOpacity>

            </View>

            <Text style={styles.modalLinkName}>Google</Text>
            <Text style={styles.modalUrl}>https://www.google.com</Text>

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
      
    </View>
  ) 
}

