' Waifu AI launcher — double-click to run. No install needed.
' Starts the helper (Node) with no console window; the app then opens in its own
' window. Keep this folder where it is. To get a desktop icon, right-click this
' file -> Send to -> Desktop (create shortcut), then set its icon to codie.ico.
Option Explicit
Dim sh, fso, dir, node, rc
Set sh = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
dir = fso.GetParentFolderName(WScript.ScriptFullName)

' Find Node.js: a standard install, else rely on PATH.
node = ""
If fso.FileExists(sh.ExpandEnvironmentStrings("%ProgramFiles%\nodejs\node.exe")) Then
  node = sh.ExpandEnvironmentStrings("%ProgramFiles%\nodejs\node.exe")
ElseIf fso.FileExists(sh.ExpandEnvironmentStrings("%ProgramFiles(x86)%\nodejs\node.exe")) Then
  node = sh.ExpandEnvironmentStrings("%ProgramFiles(x86)%\nodejs\node.exe")
Else
  ' Is "node" on PATH? (hidden check, no console flash)
  rc = sh.Run("cmd /c where node >nul 2>&1", 0, True)
  If rc = 0 Then
    node = "node"
  Else
    MsgBox "Node.js was not found." & vbCrLf & vbCrLf & _
      "Install Node.js 20.18 or newer from https://nodejs.org (the LTS button), " & _
      "then double-click Waifu AI again.", 48, "Waifu AI"
    WScript.Quit 1
  End If
End If

sh.CurrentDirectory = dir
' 0 = hidden window, False = don't wait. The server opens the app window itself.
sh.Run """" & node & """ """ & dir & "\server.mjs""", 0, False
