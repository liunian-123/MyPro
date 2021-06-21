<script>
import { h } from 'vue'
// function 接受属性以及上下文
function Heading (props, context){
    console.log(context)
    return h (`h${props.level}`,context.atter,context.slots)
}
Heading.props = ['level']
export default Heading
</script>
