<template>
    <FontAwesomeIcon
        :spin="animate"
        :icon="[styleIcon, type]"
        :size="size" />
</template>

<script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { fas } from '@fortawesome/free-solid-svg-icons';
    import { far } from '@fortawesome/free-regular-svg-icons';
    import { fab } from '@fortawesome/free-brands-svg-icons';
    import { library } from '@fortawesome/fontawesome-svg-core';
    library.add(fas, far, fab);

    export default {
        name: 'Icon',
        components: {
            FontAwesomeIcon
        },
        props: {
            animate: {
                default: false,
                required: false,
                type: Boolean
            },
            type: {
                required: true,
                type: String
            },
            size: {
                default: 'lg',
                required: false,
                type: String
            }
        },
        computed: {
            styleIcon() {
                let fasArray = Object.keys(library.definitions.fas);
                if (fasArray.indexOf(this.type) > -1) {
                    return 'fas';
                }

                let fabArray = Object.keys(library.definitions.fab);
                if (fabArray.indexOf(this.type) > -1) {
                    return 'fab';
                }

                return 'far';
            }
        }
    }
</script>