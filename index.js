function Login() {
    return (
      <Frame
        name="Login"
        fill="#EAEEF4"
        width={1728}
        height={1117}
      >
        <AutoLayout
          name="Frame 42"
          x={617}
          y={201}
          overflow="visible"
          direction="vertical"
          spacing={32}
          horizontalAlignItems="center"
        >
          <Text
            name="Hello Again!"
            fill="#000"
            width={324}
            horizontalAlignText="center"
            lineHeight={32}
            fontFamily="Poppins"
            fontSize={48}
            letterSpacing={
              -1.056
            }
            fontWeight={600}
          >
            Hello Again!
          </Text>
          <Text
            name="We wish you well today to manage your team. Your Counted Tech Team"
            fill="#636B75"
            width={509}
            horizontalAlignText="center"
            lineHeight={34.5}
            fontFamily="Poppins"
            fontSize={24}
            letterSpacing={
              -0.264
            }
          >
            We wish you well
            today to manage your
            team. Your Counted
            Tech Team
          </Text>
        </AutoLayout>
        <Frame
          name="Frame 41"
          x={486}
          y={398}
          overflow="visible"
          width={770}
          height={320}
        >
          <Frame
            name="Frame 6"
            fill="#FFF"
            cornerRadius={24}
            width={770}
            height={100}
          >
            <Text
              name="Your E-Mail"
              x={{
                type: "left-right",
                leftOffset: 32,
                rightOffset: 429,
              }}
              y={{
                type: "center",
                offset: 0.5,
              }}
              fill="#838D95"
              width={309}
              height={1}
              verticalAlignText="center"
              lineHeight={22}
              fontFamily="Poppins"
              fontSize={20}
              letterSpacing={
                -0.22
              }
            >
              Your E-Mail
            </Text>
          </Frame>
          <Frame
            name="Frame 7"
            y={164}
            fill="#FFF"
            cornerRadius={24}
            width={770}
            height={100}
          >
            <AutoLayout
              name="Input Content"
              x={{
                type: "left-right",
                leftOffset: 32,
                rightOffset: 397,
              }}
              y={{
                type: "center",
                offset: 0,
              }}
              overflow="visible"
              spacing={4}
              width={341}
              verticalAlignItems="center"
            >
              <Frame
                name="icon/email"
                hidden={true}
                width={20}
                height={20}
              >
                <SVG
                  name="Vector"
                  x={{
                    type: "horizontal-scale",
                    leftOffsetPercent: 8.333,
                    rightOffsetPercent: 8.333,
                  }}
                  y={{
                    type: "vertical-scale",
                    topOffsetPercent: 16.667,
                    bottomOffsetPercent: 16.667,
                  }}
                  fillPath="M16.6667 1.66667C16.6667 0.75 15.9167 0 15 0L1.66667 0C0.75 0 0 0.75 0 1.66667L0 11.6667C0 12.5833 0.75 13.3333 1.66667 13.3333L15 13.3333C15.9167 13.3333 16.6667 12.5833 16.6667 11.6667L16.6667 1.66667ZM15 1.66667L8.33333 5.83333L1.66667 1.66667L15 1.66667ZM15 11.6667L1.66667 11.6667L1.66667 3.33333L8.33333 7.5L15 3.33333L15 11.6667Z"
                  fill="#636B75"
                  height={
                    13.333
                  }
                  width={16.667}
                />
              </Frame>
              <Text
                name="Your Password"
                fill="#838D95"
                width="fill-parent"
                verticalAlignText="center"
                lineHeight={22}
                fontFamily="Poppins"
                fontSize={20}
                letterSpacing={
                  -0.22
                }
              >
                Your Password
              </Text>
              <Frame
                name="icon/email"
                hidden={true}
                width={20}
                height={20}
              >
                <SVG
                  name="Vector"
                  x={{
                    type: "horizontal-scale",
                    leftOffsetPercent: 8.333,
                    rightOffsetPercent: 8.333,
                  }}
                  y={{
                    type: "vertical-scale",
                    topOffsetPercent: 16.667,
                    bottomOffsetPercent: 16.667,
                  }}
                  fillPath="M16.6667 1.66667C16.6667 0.75 15.9167 0 15 0L1.66667 0C0.75 0 0 0.75 0 1.66667L0 11.6667C0 12.5833 0.75 13.3333 1.66667 13.3333L15 13.3333C15.9167 13.3333 16.6667 12.5833 16.6667 11.6667L16.6667 1.66667ZM15 1.66667L8.33333 5.83333L1.66667 1.66667L15 1.66667ZM15 11.6667L1.66667 11.6667L1.66667 3.33333L8.33333 7.5L15 3.33333L15 11.6667Z"
                  fill="#636B75"
                  height={
                    13.333
                  }
                  width={16.667}
                />
              </Frame>
            </AutoLayout>
          </Frame>
          <AutoLayout
            name="Frame 1"
            x={429}
            y={288}
            overflow="visible"
            spacing={10}
            padding={{
              top: 4,
              right: 0,
              bottom: 8,
              left: 0,
            }}
            width={341}
            height={32}
            horizontalAlignItems="end"
          >
            <Text
              name="Don’t have an account?"
              hidden={true}
              fill="#7D7AFF"
              verticalAlignText="center"
              lineHeight={20}
              fontFamily="Poppins"
              fontSize={14}
              letterSpacing={
                -0.084
              }
              textDecoration="underline"
            >
              Don’t have an
              account?
            </Text>
            <Text
              name="Forget Password?"
              fill="#1E2024"
              verticalAlignText="center"
              horizontalAlignText="right"
              lineHeight={18}
              fontFamily="Poppins"
              fontSize={20}
              letterSpacing={
                -0.12
              }
              fontWeight={600}
            >
              Forget Password?{" "}
            </Text>
          </AutoLayout>
        </Frame>
        <AutoLayout
          name="Button"
          x={486}
          y={775}
          overflow="visible"
          direction="vertical"
          width={770}
          height={99}
        >
          <AutoLayout
            name="Content"
            fill="#4269E1"
            cornerRadius={12}
            direction="vertical"
            spacing={2}
            padding={{
              vertical: 36,
              horizontal: 12,
            }}
            width={770}
            verticalAlignItems="center"
            horizontalAlignItems="center"
          >
            <AutoLayout
              name="Icon and Label"
              spacing={4}
              height={28}
              verticalAlignItems="center"
            >
              <Frame
                name="icon/face"
                hidden={true}
                width={20}
                height={20}
              >
                <SVG
                  name="Vector"
                  x={{
                    type: "horizontal-scale",
                    leftOffsetPercent: 8.333,
                    rightOffsetPercent: 8.333,
                  }}
                  y={{
                    type: "vertical-scale",
                    topOffsetPercent: 8.333,
                    bottomOffsetPercent: 8.333,
                  }}
                  fillPath="M6.875 9.16667C6.875 9.74167 6.40833 10.2083 5.83333 10.2083C5.25833 10.2083 4.79167 9.74167 4.79167 9.16667C4.79167 8.59167 5.25833 8.125 5.83333 8.125C6.40833 8.125 6.875 8.59167 6.875 9.16667ZM10.8333 8.125C10.2583 8.125 9.79167 8.59167 9.79167 9.16667C9.79167 9.74167 10.2583 10.2083 10.8333 10.2083C11.4083 10.2083 11.875 9.74167 11.875 9.16667C11.875 8.59167 11.4083 8.125 10.8333 8.125ZM16.6667 8.33333C16.6667 12.9333 12.9333 16.6667 8.33333 16.6667C3.73333 16.6667 0 12.9333 0 8.33333C0 3.73333 3.73333 0 8.33333 0C12.9333 0 16.6667 3.73333 16.6667 8.33333ZM7.21667 1.76667C8.38333 3.7 10.5 5 12.9167 5C13.3 5 13.675 4.95833 14.0333 4.9C12.8667 2.96667 10.75 1.66667 8.33333 1.66667C7.95 1.66667 7.575 1.70833 7.21667 1.76667ZM2.01667 6.225C3.44167 5.41667 4.54167 4.1 5.06667 2.525C3.64167 3.33333 2.54167 4.65 2.01667 6.225ZM15 8.33333C15 7.68333 14.9 7.05833 14.725 6.46667C14.1417 6.59167 13.5417 6.66667 12.9167 6.66667C10.3083 6.66667 7.98333 5.46667 6.45 3.59167C5.575 5.725 3.83333 7.4 1.66667 8.21667C1.675 8.25 1.66667 8.29167 1.66667 8.33333C1.66667 12.0083 4.65833 15 8.33333 15C12.0083 15 15 12.0083 15 8.33333Z"
                  fill="#FFF"
                  height={
                    16.667
                  }
                  width={16.667}
                />
              </Frame>
              <Text
                name="Button text"
                fill="#FFF"
                lineHeight={20}
                fontFamily="Poppins"
                fontSize={24}
                letterSpacing={
                  -0.144
                }
                fontWeight={500}
              >
                Login
              </Text>
              <Frame
                name="icon/face"
                hidden={true}
                width={20}
                height={20}
              >
                <SVG
                  name="Vector"
                  x={{
                    type: "horizontal-scale",
                    leftOffsetPercent: 8.333,
                    rightOffsetPercent: 8.333,
                  }}
                  y={{
                    type: "vertical-scale",
                    topOffsetPercent: 8.333,
                    bottomOffsetPercent: 8.333,
                  }}
                  fillPath="M6.875 9.16667C6.875 9.74167 6.40833 10.2083 5.83333 10.2083C5.25833 10.2083 4.79167 9.74167 4.79167 9.16667C4.79167 8.59167 5.25833 8.125 5.83333 8.125C6.40833 8.125 6.875 8.59167 6.875 9.16667ZM10.8333 8.125C10.2583 8.125 9.79167 8.59167 9.79167 9.16667C9.79167 9.74167 10.2583 10.2083 10.8333 10.2083C11.4083 10.2083 11.875 9.74167 11.875 9.16667C11.875 8.59167 11.4083 8.125 10.8333 8.125ZM16.6667 8.33333C16.6667 12.9333 12.9333 16.6667 8.33333 16.6667C3.73333 16.6667 0 12.9333 0 8.33333C0 3.73333 3.73333 0 8.33333 0C12.9333 0 16.6667 3.73333 16.6667 8.33333ZM7.21667 1.76667C8.38333 3.7 10.5 5 12.9167 5C13.3 5 13.675 4.95833 14.0333 4.9C12.8667 2.96667 10.75 1.66667 8.33333 1.66667C7.95 1.66667 7.575 1.70833 7.21667 1.76667ZM2.01667 6.225C3.44167 5.41667 4.54167 4.1 5.06667 2.525C3.64167 3.33333 2.54167 4.65 2.01667 6.225ZM15 8.33333C15 7.68333 14.9 7.05833 14.725 6.46667C14.1417 6.59167 13.5417 6.66667 12.9167 6.66667C10.3083 6.66667 7.98333 5.46667 6.45 3.59167C5.575 5.725 3.83333 7.4 1.66667 8.21667C1.675 8.25 1.66667 8.29167 1.66667 8.33333C1.66667 12.0083 4.65833 15 8.33333 15C12.0083 15 15 12.0083 15 8.33333Z"
                  fill="#FFF"
                  height={
                    16.667
                  }
                  width={16.667}
                />
              </Frame>
            </AutoLayout>
          </AutoLayout>
        </AutoLayout>
      </Frame>
    );
  }