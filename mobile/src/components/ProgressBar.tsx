import { useEffect } from "react";
import { View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";

interface Props {
  progress?: number;
}

export function ProgressBar({ progress = 0 }: Props) {
  const sheredProgress = useSharedValue(progress)

  const style = useAnimatedStyle(() => {
    return {
      width: `${sheredProgress.value}%`
    }
  })

  useEffect(() => {
    // sheredProgress.value = withDelay(200, withTiming(progress)) 
    sheredProgress.value = withTiming(progress)
  }, [progress])

  return (
    <View className="w-full h-3 rounded-xl bg-zinc-700 mt-4">
      <Animated.View
        className="h-3 rounded-xl bg-violet-600"
        style={style}
      />
    </View>
  )
}