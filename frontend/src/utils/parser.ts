import * as htmlparser2 from 'htmlparser2'
import { DomHandler, type ChildNode } from "domhandler"

/**
 * HTMLデータの解析
 * @param data string 文字列データのHTML
 */
export default function parseHtml(data: string): ChildNode[] {
  return parseDocument(data)
}

/**
 * HTML（文字列）をdomhandlerに定義されたChildNode型で返す
 * @param data HTML（文字列）
 */
function parseDocument(data: string): ChildNode[] {
  const handler = new DomHandler(undefined)
  new htmlparser2.Parser(handler).end(data)
  return handler.dom
}