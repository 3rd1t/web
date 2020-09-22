import { Simple } from "./simple/simple"
import { Multiline } from "./multiline/multiline"
import { Tag } from "./tag/tag"
import { Button } from "./button/button"
import { Icon } from "./icon/icon"

export type Cell = typeof Simple | typeof Multiline | typeof Tag | typeof Button | typeof Icon
