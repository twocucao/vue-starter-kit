import { defineComponent, ref, withModifiers } from "vue";
import { Button } from "vant";

export default defineComponent({
  name: "PageHome",
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };
    return () => (<>
      {/*<Button type="primary">btn</Button>*/}
      <Button type="primary" onClick={withModifiers(inc, ["self"])}>{count.value}</Button>
    </>)
  },
});
