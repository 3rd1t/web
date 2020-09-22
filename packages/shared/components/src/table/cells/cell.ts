import { Simple } from "./simple/simple"
import { Multiline } from "./multiline/multiline"
import { Tag } from "./tag/tag"
import { Button } from "./button/button"

export type Cell = typeof Simple | typeof Multiline | typeof Tag | typeof Button
